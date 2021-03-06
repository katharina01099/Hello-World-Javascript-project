const PubSub = require('../helpers/pub_sub.js');

const InputView = function(form){
  this.form = form;
}

InputView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt)
  })
}

InputView.prototype.handleSubmit = function (evt) {
  evt.preventDefault()
  PubSub.publish('InputView:answer-submitted', evt.target.input.value)
  console.log('Answer check', evt.target.input.value);
  evt.target.reset();
};
module.exports = InputView;
