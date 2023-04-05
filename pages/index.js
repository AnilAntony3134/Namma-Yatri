import { useEffect, useState } from 'react';
import Link from 'next/link';
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Map from '../components/Map';
import Location from '../components/Location';

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl:user.photoURL,
        })
      } 
      // else {
      //   setUser(null)
      //   router.push('/login')
      // }
    })
  })

  return (
    <Wrapper>
      <Location />
      <Map pickup={[]} dropoff={[]} />
      <ActionItems>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <InputButton> &#x21B3; &nbsp; Where to?</InputButton>
            </ActionButton>
          </Link>
          </ActionButtons>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-3 p-6
`;
const ActionButtons=tw.div`
flex 
`
const ActionButton=tw.div`
flex-1 m-1 h-18 items-center flex-col justify-center transform hover:scale-105 transition rounded-md
`
const InputButton=tw.div`
h-16 bg-gray-800 text-yellow-400 text-md px-4 flex items-center rounded-md font-medium tracking-wide
`