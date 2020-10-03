import { Course } from './course';
import { Faculty } from './faculty';

export class AddTrainingRequest {
    public trainingName : string;
    public startDate : Date;
    public endDate : Date;
    public facultyId : Faculty["facultyId"];
    public courseId : Course["courseId"];
}
