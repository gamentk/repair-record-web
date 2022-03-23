import { ILoginForm } from './../components/LoginModal';
import axios from 'axios';
import Service from './Service';
import { IUser } from './../typings/IUser';
import { IResponse } from '../typings/IResponse';

class UserService extends Service {
    public async login(user: ILoginForm): Promise<IResponse<IUser>> {
        const response = await axios.post(`${this.url}/v1/auth/login`, user);
        return response.data;
    }
}

export default new UserService();