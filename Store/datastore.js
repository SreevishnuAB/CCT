import { observable, action, decorate} from 'mobx';

class DataStore{

  events = [];

  session = {
    user:'',
    studentID:'',
    event:'',
    credits:0
  };
  updateEventsList(events){
    for(var i=0;i<events.length;i++)
      this.events[i] = {'label':events[i],'value':events[i]};
  }

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