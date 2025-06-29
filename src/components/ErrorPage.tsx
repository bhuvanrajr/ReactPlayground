import { useRouteError } from 'react-router'

function ErrorPage() {
    const error  = useRouteError();
  return (
    <div>
        <h2>Oops! Error occurred!</h2>
        <h3>{error.status} {error.statusText}</h3>
        <h3>{error.data}</h3>
    </div>
  )
}

export default ErrorPage
