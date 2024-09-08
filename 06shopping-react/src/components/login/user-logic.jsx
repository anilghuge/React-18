import { useCaptcha } from "../../hooks/captcha";
import { useAPI } from "../../hooks/getapi";
export function UserLogin() {
  const captcha = useCaptcha();
  // const categories = useAPI("https://fakestoreapi.com/products");
  // console.log(categories);
  return (
    <div className="container-fluid">
      {/* <ol>
        {categories.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ol> */}
      <h3>User Login</h3>
      <dl>
        <dt>UserId</dt>
        <dd>
          <input type="text" className="form-control" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" className="form-control" />
        </dd>
        <dt>Verify Code</dt>
        <dd>{captcha}</dd>
      </dl>
      <button className="btn btn-warning">Login</button>
    </div>
  );
}
