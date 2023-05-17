import {useRouter} from "next/router";

export default function EditGame() {
    const router = useRouter();
    const {game} = router.query;
    console.log(game)
}