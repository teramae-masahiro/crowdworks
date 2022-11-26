import "@scss/class/_clickMenu";

export class ClickMenu {
  constructor(btn,target){
    this.btn = document.querySelector(btn);
    this.target = document.querySelector(target);
    this.body =  document.querySelector("body");
    this._addfEvent();
  }
  _addfEvent() {
    this.btn.addEventListener('click', ()=> {
      this.btn.classList.toggle('open');
      this.target.classList.toggle('inview');
      this.body.classList.toggle('noscroll');
    });
  }
}
