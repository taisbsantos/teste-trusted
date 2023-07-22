import api from '../../services/api'

import { AxiosInstance, AxiosResponse } from 'axios'
import {
    UsuariosGithubDTO

} from './models'

class GithubService {
  private readonly httpClient: AxiosInstance

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async findBy(filtro: string, valor: number | string | undefined): Promise<AxiosResponse<UsuariosGithubDTO>> {
    return await this.httpClient.get<UsuariosGithubDTO>(`api/usuarios`, {
      params: {
        [filtro] : valor
      }
    })
  }

  async findAll(): Promise<AxiosResponse<UsuariosGithubDTO[]>> {
    return await this.httpClient.get<UsuariosGithubDTO[]>(`api/usuarios`)
  }

  async post(data: string[]): Promise<AxiosResponse<any>> {
    return await this.httpClient.post<any>('api/usuarios/',{nomes: data} );
  }

}

export const githubService = new GithubService(api)