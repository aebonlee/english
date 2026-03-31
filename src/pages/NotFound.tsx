import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

function NotFound(): React.ReactElement {
  return (
    <>
      <SEOHead
        title="404 - 페이지를 찾을 수 없습니다 - English Pro"
        description="요청하신 페이지를 찾을 수 없습니다."
      />

      <div className="not-found">
        <div className="not-found__content">
          <h1 className="not-found__code">404</h1>
          <p className="not-found__message">
            페이지를 찾을 수 없습니다
          </p>
          <p className="not-found__description">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <Link to="/" className="btn btn--primary btn--lg">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
