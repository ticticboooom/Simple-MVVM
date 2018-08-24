
requirejs(["MVVM"], function (MVVM) {
    function ViewModel() {
        var self = this;
        self.value1 = MVVM.MVVM.observable("value1");
        self.value2 = MVVM.MVVM.observable("value2");
        self.value3 = MVVM.MVVM.observable("value3");
        self.value4 = MVVM.MVVM.observable("value4");
        self.value5 = MVVM.MVVM.observable("value5");
    }
    const vm = new ViewModel();
    const mvvm = new MVVM.MVVM.bindToView(vm);
    vm.value1.set("hola test");
    vm.value2.set("hola test1");
    vm.value3.set("hola test2");
    vm.value4.set("hola test3");
    vm.value5.set("hola test4");
})