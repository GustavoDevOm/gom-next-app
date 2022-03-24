import { QueryClientProvider } from 'react-query'

import { AppProps } from 'next/app'

import { queryClient } from '@/services/queryClient'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
)

export default MyApp
