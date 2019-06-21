import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockVotes } from './mock-data/votes'; //Import the mock votes

export class Vote {
  voteID; //: "1",
  loginEmail; //: "voter@icsd.k12.ny.us",
  topicID; //: "4",
  voteValue; //: "Yes",
  voteDateTime; //: "2019-06-01T12:30:00-05:00"
}

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  static nextVoteId = 100;

  constructor(private http: HttpClient) {
  }

  addVote(avote: Vote) {
    return Observable.create(o => {
      VotesService.nextVoteId = VotesService.nextVoteId + 1;
      avote.voteID = VotesService.nextVoteId;
      MockVotes.push(avote);
      o.next();
    });

    //If we had an API we'd likely execute an http POST
  }

  hasVoted(auserid, atopicid) {
    return Observable.create(o => {
      o.next(MockVotes.findIndex(v => v.topicID === atopicid && v.loginEmail === auserid) > -1);
    });

    //If we had an API we'd likely execute an http GET
  }
}
