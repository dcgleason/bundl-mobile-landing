import { AppStoreLink } from '@/components/AppStoreLink'
import { HeartBackground } from '@/components/HeartBackground'
import { Container } from '@/components/Container'



export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-19 top-[42%] -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <HeartBackground color="#fff" className="animate-pulse " />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
         Start today.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
          Download the app here. 
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
