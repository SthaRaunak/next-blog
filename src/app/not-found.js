import Link from "next/link";

//next js layout to handle 404 pages
function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Oops! We couldnt find the page youre looking for. Please check the
        address again and try again.
      </p>
      <p>Error: 404</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
