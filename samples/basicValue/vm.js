
requirejs(["MVVM"], function (MVVM) {
    function ViewModel() {
        var self = this;
        self.value1 = MVVM.MVVM.observable("value1");
    }
    const vm = new ViewModel();
    const mvvm = new MVVM.MVVM();
    mvvm.bindToView(vm);
    vm.value1.set("hola test");
})