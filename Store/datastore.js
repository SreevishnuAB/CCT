import { observable, action, decorate} from 'mobx';

class DataStore{

  events = [{label:'Sports', value:'Sports'},{label:'Arts',value:'Arts'}];

  session = {
    user:'',
    studentID:'',
    event:'',
    credits:0
  };

  updateUser(user){
    this.session.user = user;
  }

  updateStudentID(SID){
    this.session.studentID = SID;
  }

  updateEvent(event){
    this.session.event = event;
  }

  updateCredits(credits){
    this.session.credits = credits;
  }
}

decorate(DataStore, {
  session:observable,
  updateUser:action,
  updateStudentID:action,
  updateEvent:action,
  updateCredits:action
});

export default new DataStore();