export function scrollTo(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}