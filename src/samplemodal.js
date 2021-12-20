import Modal from "../components/Modal";
import { Button } from "react-bootstrap";
const [isOpen, setIsOpen] = useState(false);

<Button
type="button"
onClick={() => {
  setIsOpen(true);
}}
>
OpenModal
</Button>
<Modal
open={isOpen}
onClose={() => {
  setIsOpen(false);
}}
/>