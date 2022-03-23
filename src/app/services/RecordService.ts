import axios from 'axios';
import Service from './Service';
import { IResponse } from '../typings/IResponse';
import { IRecord } from '../typings/IRecord';

class RecordService extends Service {
    public async getRecords(): Promise<IResponse<IRecord[]>> {
        const response = await axios.get(`${this.url}/v1/records`);
        return response.data;
    }
}

export default new RecordService();