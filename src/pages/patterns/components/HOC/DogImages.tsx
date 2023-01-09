import styles from './index.module.less'
import withHover from './withHover'
import withLoader from './withLoader'

function DogImages(props: any) {
  return (
    <div {...props}>
      {props.hovering && <div className={styles.styles}>Hovering!</div>}
      <div className={styles.list}>
        {props.data.message.map((dog: any, index: number) => (
          <img src={dog} alt='Dog' key={index} />
        ))}
      </div>
    </div>
  )
}

export default withHover(
  withLoader(DogImages, 'https://dog.ceo/api/breed/labrador/images/random/6')
)
