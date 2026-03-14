export function scrollTo(id: string) {
    const container = document.querySelector("main")
    const target = document.getElementById(id)

    if (!container || !target) return

    const start = container.scrollTop
    const end = target.offsetTop

    const duration = 900
    let startTime: number | null = null

    const animate = (time: number) => {
        if (!startTime) startTime = time

        const progress = time - startTime
        const percent = Math.min(progress / duration, 1)

        const ease =
            percent < 0.5
                ? 4 * percent * percent * percent
                : 1 - Math.pow(-2 * percent + 2, 3) / 2

        container.scrollTop = start + (end - start) * ease

        if (progress < duration) {
            requestAnimationFrame(animate)
        }
    }

    requestAnimationFrame(animate)
}