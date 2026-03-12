export const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const start = window.scrollY;
    const end = el.getBoundingClientRect().top + window.scrollY - 80;

    const duration = 600;
    let startTime: number | null = null;

    const animate = (time: number) => {
        if (!startTime) startTime = time;

        const progress = time - startTime;
        const percent = Math.min(progress / duration, 1);

        const ease =
            percent < 0.5
                ? 2 * percent * percent
                : 1 - Math.pow(-2 * percent + 2, 2) / 2;

        window.scrollTo(0, start + (end - start) * ease);

        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};