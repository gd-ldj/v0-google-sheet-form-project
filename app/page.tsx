import { FormComponent } from "@/components/form-component"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Form Submission to Google Sheets</h1>
      <div className="max-w-md mx-auto">
        <FormComponent />
      </div>
    </main>
  )
}

