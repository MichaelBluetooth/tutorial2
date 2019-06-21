import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockTopics } from './mock-data/topics'; // Import the list of mocked topics

export class Topic {
  topicID;
  Author; //": "author@icsd.k12.ny.us",
  Title; //": "topic2",
  Description; //": "Second topic description here.",
  topicStatus; //": "Published",
  countYes: Number; //": "0",
  countNo: Number; //": "0",
  countAbstain: Number; //": "0"
}

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  static nextTopicId = 100;

  constructor(private http: HttpClient) {
  }

  addTopic(topic: any) {
    // Return an observable to simulate async behavior API calls with exhibit
    return Observable.create(o => {
      TopicsService.nextTopicId = TopicsService.nextTopicId + 1;
      topic.topicID = TopicsService.nextTopicId;
      MockTopics.push(topic); //push the new topic to the list of mocked topics
      o.next(topic); //return the topic, along with it's newly assigned id
    });

    // If we had an api, we'd execute an http POST
    //  Then callers would use this function like so:
    //      this.topicsService.addTopic(someNewTopic).subscribe(createdTopicFromApi => {
    //         //Do something with "createdTopicFromApi"
    //      });
    // return this.http.post('/api/v1/topics', topic);
  }

  getTopic(atopicID) {
    return Observable.create(o => o.next(MockTopics.find(topic => {
      return topic.topicID == atopicID;
    })));

    // If we had an api:
    // this.http.get('api/v1/topics/' + atopicID);
  }

  putTopic(atopic) {
    let i = MockTopics.map(topic => topic.topicID).indexOf(atopic.topicID);
    if (i > -1) {
      MockTopics[i] = atopic;
    }

    // Similar to "addTopic()" except the verb and URL might be different
  }

  getTopics() {
    return Observable.create(o => o.next(MockTopics));

    // If we had an api:
    // this.http.get('api/v1/topics')
  }
}
