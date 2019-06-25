import { API, graphqlOperation } from 'aws-amplify';

class ApiService {
  async get(query) {
    return await API.graphql(graphqlOperation(query));
  }

  async find(query, uidObject) {
    return await API.graphql(graphqlOperation(query, uidObject));
  }

  async post() {}

  async put() {}

  async delete() {}
}

export default new ApiService();
