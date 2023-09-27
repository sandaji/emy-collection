import { Spinner, Button } from "react-bootstrap";

export default function LoadingBox() {
  return (
    <>
      <Button variant="info" className="mx-1 text-light" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        >
          <span className="visually-hidden text-light">Loading...</span>
        </Spinner>
      </Button>
      <Button variant="info" className="mx-1 text-light" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
}
