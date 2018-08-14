function ViewModel() {
    var self = this;
    self.value1 = "";
}
requirejs(["MVVM"], function (MVVM) {
    const vm = new ViewModel();
    const mvvm = new MVVM.MVVM();
    mvvm.bindToView(vm);
})