function currentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

export default class Todo {
    constructor(title, date, priority, status) {
        
        if (title === "") {
            throw new Error("Title is required")
        } else {
            this.title = title.replace(/\s{2,}/g, ' ').trim();
        }
        
        if (date === "") {
            this.date = currentDate()
        } else {
            this.date = date
        }

        if (priority != "low" && priority != "high") {
            this.priority = "low"
        } else {
            this.priority = priority
        }

        this.status = false
        this.id = crypto.randomUUID()
        }

    changeValue(item, newValue) {
        this[item] = newValue
    }

    toggleStatus() {
    this.stauts = !this.status    
    }
}
