import imgDetail from '@assets/landing/detail.png'
import imgStats from '@assets/landing/stats.png'
import Card, { CardType } from '@components/Card/Card'
function LandingPage() {
  return (
    <>
      <p>
        WR Stats is a prototype web application where you can save your daily
        wins and losses in Wild Rift, allowing you to monitor your daily
        progress in your matches.
      </p>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingTop: '20px',
          flexWrap: 'wrap',
          gap: '10px',
          width: '100%',
        }}
      >
        <Card
          // title='Save your daily matches victories and defats...'
          title=''
          subtitle=''
          type={CardType.details}
        >
          <p>Save your daily matches victories and defats...</p>
          <img src={imgDetail} alt='daily match register example' />
          {/* <img src={imgMatch} alt='daily match register example' /> */}
        </Card>
        <Card title='' subtitle='' type={CardType.details}>
          <p>Watch your winrate progress...</p>
          <img src={imgStats} alt='matches by winrate chart example' />
        </Card>
      </section>
    </>
  )
}

export default LandingPage
