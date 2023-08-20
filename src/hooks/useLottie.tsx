import type { Player } from "@lottiefiles/react-lottie-player"
import React, { useEffect, useRef, useState } from "react"

type returnType = {
	playerRef: React.MutableRefObject<(Player | null)[]>
	setLottie: React.Dispatch<React.SetStateAction<boolean>>
}

const useLottie = (): returnType => {
	const [lottie, setLottie] = useState(false)

	const playerRef = useRef<(Player | null)[]>([])

	useEffect(() => {
		//TODO: Uncomment this line when lottie is required
		if (playerRef.current) playerRef.current.map((item) => item && item.play())
	}, [lottie])

	return { playerRef, setLottie }
}

export { useLottie }
