//our-domain.com/news/something-imp
import {useRouter} from 'next/router';

function DetailPage(){
    const router = useRouter();

    const newsId = router.query.newsId;

    return <h1>This is News Detail Page</h1>
   }
  
   export default DetailPage;