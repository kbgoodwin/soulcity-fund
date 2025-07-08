import Head from 'next/head'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Investor Dashboard</title>
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Welcome, Investor</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">Total Invested</h2>
                <p className="text-2xl font-bold text-blue-600">$250,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">Expected Return</h2>
                <p className="text-2xl font-bold text-green-600">$500,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">Dividends Paid</h2>
                <p className="text-2xl font-bold text-purple-600">$20,000</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Summary</h3>
            <p className="text-gray-600">You are currently invested in Phase I and scheduled to receive quarterly dividends through year 5. Your dashboard will reflect updated balances and return expectations as capital is deployed and properties generate income.</p>

            <div className="mt-4">
              <Progress value={66} className="h-3" />
              <p className="text-sm text-gray-500 mt-1">Project Progress: 66% Complete</p>
            </div>

            <div className="mt-6">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">Download Latest Statement</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
