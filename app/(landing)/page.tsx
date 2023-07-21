import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      Landing page
      <div>
        <Link href={"/sign-up"}>
          <Button>
            Register
          </Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button>
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
}
