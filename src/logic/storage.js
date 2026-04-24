export function saveToStorage(projects) {
    localStorage.setItem("projects", JSON.stringify(projects))
}

export function loadFromStorage() {
    return JSON.parse(localStorage.getItem("projects"))
}