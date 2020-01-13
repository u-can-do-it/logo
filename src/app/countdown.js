export class Countdown {
  constructor(endDate) {
    this.countdown = document.querySelector(".countdown");
    this.day = document.querySelector(".countdown__day");
    this.hour = document.querySelector(".countdown__hour");
    this.minute = document.querySelector(".countdown__minute");
    this.second = document.querySelector(".countdown__second");
    this.endingDate = new Date(endDate).getTime();
  }

  start() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.endingDate - now;

      // time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // render timer on a page
      this.day.innerHTML = days + " d";
      this.hour.innerHTML = hours + " h";
      this.minute.innerHTML = minutes + " m";
      this.second.innerHTML = seconds + " s";
      this.countdown.classList.add("countdown__visible");
    }, 1000);
  }
}
