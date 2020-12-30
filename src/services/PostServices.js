import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";

class PostService extends GenericService {
  constructor() {
    super();
  }

  register = (Data) => {
    // console.log(data);
    return this.post("Advertisment/", Data);
  };
}

let postService = new PostService();
export default postService;
