import { useRouter } from '@/routes/hooks';
import { Button } from '@/components/ui/button';
//import  Landingspageinput from './components/landingspageinput';


export default function landingspage() {
  const router = useRouter();
//absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2
  return (
    <div className=" items-center justify-center text-center">
      
      <h2 className="font-heading my-2 text-2xl font-bold">
        Configureer hier je offerte pagina!
      
      </h2>
      <iframe className={"full-width"} src="https://form-builder-2mfzss9nu-mohamed-taouils-projects.vercel.app" width="1000" height="500"></iframe>

      <div>
      <div>
    


      </div>
      
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => router.back()} variant="default" size="lg">
          Go back
        </Button>
        <Button onClick={() => router.push('/')} variant="ghost" size="lg">
          Back to Home
        </Button>
      </div>
      </div>
    </div>
  );
}
