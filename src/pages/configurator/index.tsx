import { useRouter } from '@/routes/hooks';
import { Button } from '@/components/ui/button';
import  Landingspageinput from './components/landingspageinput';


export default function landingspage() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        Maak sales!
      </span>
      <h2 className="font-heading my-2 text-2xl font-bold">
        Vraag een nieuwe op maat gemaakte sales landing page aan!
      </h2>
      <p>
        Vul hier zo uitgebreid mogelijk info over de landing page en gebruik de checklist om alles af te vinken.
        Z.s.m. mogelijk is uw landing page gehost en ready!

      </p>
      <div>
      <div>
        <Landingspageinput/>



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
