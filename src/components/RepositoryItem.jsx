import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';
import theme from '../theme'

const styles = StyleSheet.create({
  repoContainer: {
    borderRadius: 10,
    backgroundColor: theme.colors.repoBgColor,
    padding: 5,

  },
});

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

const RepositoryItem = ({props}) => {
  return (
    <View style={styles.repoContainer}>

      <View style={{display: 'flex', flexDirection: 'row',}}>
        <Image 
          onError={(e) => console.log(e.nativeEvent.error) } 
          style={{height: 60, width: 60, marginBottom: 15,marginRight: 15,}} 
          source={{
            uri: props.ownerAvatarUrl,
          }}
          />
        <View style={{display: 'flex', flexDirection: 'column', gap: 5}}>
          <Text color="repoText" fontWeight="bold" fontSize='subheading'>{props.fullName}</Text>
          <Text color="repoText" style={{paddingRight: 75}}>{props.description}</Text>
          <Text color="repoText" style={{padding: 5, backgroundColor: '#23739E', borderRadius: 5, alignSelf: 'flex-start',}}>{props.language}</Text>
        </View>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginBottom: 10}}>
        <Text color="repoText"><Text fontWeight='bold' color='repoText'>{formatNumber(props.stargazersCount)}</Text>{"\n"}Stars</Text>
        <Text color="repoText"><Text fontWeight='bold' color='repoText'>{formatNumber(props.forksCount)}</Text>{"\n"}Forks</Text>
        <Text color="repoText"><Text fontWeight='bold' color='repoText'>{formatNumber(props.reviewCount)}</Text>{"\n"}Reviews</Text>
        <Text color="repoText"><Text fontWeight='bold' color='repoText'>{formatNumber(props.ratingAverage)}</Text>{"\n"}Ratings</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;