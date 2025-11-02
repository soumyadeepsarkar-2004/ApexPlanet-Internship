// Live time clock functionality
export class TimeClockManager {
    constructor() {
        this.timeElement = document.getElementById('live-time');
        this.timeZone = 'Asia/Kolkata';
        
        if (this.timeElement) {
            this.startClock();
        }
    }

    startClock() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const now = new Date();
        const options = {
            timeZone: this.timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };
        
        const timeString = now.toLocaleTimeString('en-US', options);
        const location = this.timeZone === 'Asia/Kolkata' ? 'Asia/Kolkata, IND' : 'Local Time';
        
        if (this.timeElement) {
            this.timeElement.textContent = `${location} • ${timeString}`;
        }
    }

    setTimeZone(timeZone) {
        this.timeZone = timeZone;
    }
}





