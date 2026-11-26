import { useCallback, useEffect, useRef, useState } from 'react';

// Progress is saved in the browser only, under one key with one entry per track.
// Saving a track rewrites only that track's entry, so other tracks are left alone.
const STORAGE_KEY = 'dq-roadmap-progress-v1';

const readAll = () => {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        return {};
    }
};

const writeTrack = (trackId, value) => {
    try {
        const all = readAll();
        all[trackId] = value;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch {
        // Storage can be blocked or full. The page still works without saving.
    }
};

export const useTrackProgress = (trackId) => {
    const [state, setState] = useState(() => readAll()[trackId] || {});
    const ready = useRef(false);

    useEffect(() => {
        if (!ready.current) {
            ready.current = true;
            return;
        }
        writeTrack(trackId, state);
    }, [trackId, state]);

    const get = useCallback((id) => state[id], [state]);
    const set = useCallback((id, value) => {
        setState((prev) => {
            const next = { ...prev };
            if (value === undefined || value === false || value === null) delete next[id];
            else next[id] = value;
            return next;
        });
    }, []);
    const reset = useCallback(() => setState({}), []);
    const count = useCallback((ids) => ids.filter((id) => state[id]).length, [state]);

    return { get, set, reset, count };
};
