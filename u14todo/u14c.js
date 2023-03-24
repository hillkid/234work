const app = Vue.createApp({
  data() {
    return {
      urInput:{
        task: '',
        yy: '',
        mm: '',
        dd: '',
        tag: '',
      },
      myList: JSON.parse(localStorage.getItem('todoStore')) || [],
      //此一指定，需在此設定，不能在methods設
    }
  },
  methods: {
    addTo() {
      if (this.urInput.task===''){
        alert('請輸入事項');  //提示未輸入資料
        return;
      }
      let theTodo={
        task: this.urInput.task,
        yy: this.urInput.yy,
        mm: this.urInput.mm,
        dd: this.urInput.dd,
        tag: this.urInput.tag,
        completed: false,
        date:`${this.urInput.yy}${(this.urInput.mm<10)?'0':''}${this.urInput.mm}${(this.urInput.dd<10)?'0':''}${this.urInput.dd}`,
      };
      this.myList.push(theTodo);
      localStorage.setItem('todoStore',JSON.stringify(this.myList));
      this.urInput.task='';  //清空輸入框
    },
    storeTo() {
      localStorage.setItem('todoStore',JSON.stringify(this.myList));
    },
    toRemove(index) {
      this.myList.splice(index,1);
      localStorage.setItem('todoStore',JSON.stringify(this.myList));
    },
    mergeBy(type){
      this.myList.sort((i, j) => j[type] > i[type] ? 1 : -1);
    },
    orderBy(type){
      this.myList.sort((i, j) => j[type] < i[type] ? 1 : -1);
    },
    toEdit(index){
      this.urInput.task=this.myList[index].task;
      this.urInput.yy=this.myList[index].yy;
      this.urInput.mm=this.myList[index].mm;
      this.urInput.dd=this.myList[index].dd;
      this.urInput.tag=this.myList[index].tag;
      this.myList.splice(index,1);
      localStorage.setItem('todoStore',JSON.stringify(this.myList));
    },
  },
});
app.mount('#app');