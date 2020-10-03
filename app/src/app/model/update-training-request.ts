import { Faculty } from './faculty';

export class UpdateTrainingRequest {
    
    public trainingName : string;
    public startDate : Date;
    public endDate : Date;
    public facultyId : Faculty["facultyId"];
}
