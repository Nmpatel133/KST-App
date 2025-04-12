import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

type SectionName = 'arti' | 'anantKoti' | 'antaryami' | 'thal' | 'puja' | 'vato';
type IconName = 'flame' | 'book' | 'restaurant' | 'flower' | 'chatbox-ellipses' | 'information-circle' | 'chevron-up' | 'chevron-down';

export default function NotesScreen() {
  const [expandedSections, setExpandedSections] = useState<Record<SectionName, boolean>>({
    arti: false,
    anantKoti: false,
    antaryami: false,
    thal: false,
    puja: false,
    vato: false,
  });

  const toggleSection = (section: SectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.mainHeader, { backgroundColor: '#007AFF' }]}>
        <Text style={styles.mainTitle}>Entrance Exam Information</Text>
        <Text style={styles.mainSubtitle}>KST Requirements Guide</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Oral Exam Requirements</Text>
        <View style={styles.infoCard}>
          <Ionicons name="information-circle" size={24} color="#007AFF" style={styles.infoIcon} />
          <Text style={styles.description}>
            Applicants must recite specific mukhpath pieces upon the proctor's prompt.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scoring System</Text>
        <View style={styles.scoreCard}>
          <View style={styles.scoreItem}>
            <Text style={styles.scoreLabel}>Rating Scale</Text>
            <Text style={styles.scoreValue}>1-5</Text>
          </View>
          <View style={styles.scoreDivider} />
          <View style={styles.scoreItem}>
            <Text style={styles.scoreLabel}>Required Score</Text>
            <Text style={styles.scoreValue}>90%</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KST Requirements</Text>
        
        <View style={styles.requirementsList}>
          {/* Arti Section */}
          <View style={styles.requirementSection}>
            <TouchableOpacity
              style={styles.requirementCard}
              onPress={() => toggleSection('arti')}
            >
              <Ionicons name="flame" size={24} color="#007AFF" style={styles.cardIcon} />
              <Text style={styles.cardText}>Arti</Text>
              <Ionicons 
                name={expandedSections.arti ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#007AFF" 
              />
            </TouchableOpacity>
            {expandedSections.arti && (
              <View style={styles.contentCard}>
                <Text style={styles.contentText}>
                  Jay Swāminārāyan, Jay Akshar-Purushottam,{'\n'}
                  Akshar-Purushottam jay, darshan sarvottam... Jay Swāminārāyan... O{'\n'}
                  Swaminarayan! Praise to you! O Akshar-Purushottam! Praise to you! O{'\n'}
                  Akshar-Purushottam! Praise to you! Your darshan is supreme...{'\n\n'}
                  
                  Mukta anant supujit, sundar sākāram,{'\n'}
                  Sarvopari karunākar, mānav tanudhāram... Jay Swāminārāyan... 1{'\n'}
                  Bhagwan Swaminarayan is worshiped by countless muktas (liberated souls), possesses a{'\n'}
                  divine form, and is splendid. He, who is supreme and bestows compassion [on all],{'\n'}
                  manifested on earth with a divine human form... 1{'\n\n'}
                  
                  Purushottam Parabrahma, Shri Hari Sahajānand,{'\n'}
                  Aksharbrahma anādi, Gunātitānand… Jay Swāminārāyan... 2{'\n'}
                  Purushottam Parabrahman is Shri Hari Sahajanand, The eternal Aksharbrahman is{'\n'}
                  Swami Gunatitanand... 2{'\n\n'}
                  
                  Prakat sadā sarvakartā, param muktidātā,{'\n'}
                  Dharma ekāntik sthāpak, bhakti paritrātā… Jay Swāminārāyan... 3{'\n'}
                  Bhagwan Swaminarayan is always manifest, the all-doer, and the bestower of ultimate{'\n'}
                  liberation. He is the establisher of ekantik dharma and the protector of bhakti (devotion)... 3{'\n\n'}
                  
                  Dāsbhāv divyatā saha, brahmarupe priti,{'\n'}
                  Suhradbhāv alaukik, sthāpit shubh riti... Jay Swāminārāyan... 4{'\n'}
                  Servitude with an understanding of all to be divine, offering devotion upon becoming{'\n'}
                  brahmarup, and divine amity; these auspicious means he established... 4{'\n\n'}
                  
                  Dhanya dhanya mam jivan, tav sharane sufalam,{'\n'}
                  Yagnapurush pravartita, siddhāntam sukhadam... Jay Swāminārāyan... 5{'\n'}
                  My life is blessed! It has become fruitful at your feet. This doctrine established by{'\n'}
                  Bhagwan Swaminarayan and spread by Yagnapurush (Shastriji Maharaj), bestows{'\n'}
                  ultimate happiness... 5
                </Text>
              </View>
            )}
          </View>

          {/* Anant Koti Section */}
          <View style={styles.requirementSection}>
            <TouchableOpacity
              style={styles.requirementCard}
              onPress={() => toggleSection('anantKoti')}
            >
              <Ionicons name="book" size={24} color="#007AFF" style={styles.cardIcon} />
              <Text style={styles.cardText}>Ashtak (Anant Koti)</Text>
              <Ionicons 
                name={expandedSections.anantKoti ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#007AFF" 
              />
            </TouchableOpacity>
            {expandedSections.anantKoti && (
              <View style={styles.contentCard}>
                <Text style={styles.contentText}>
                  Anant-koṭīndu-ravi-prakāshe, Dhāmnya-kshare mūrti-matākshareṇa;{'\n'}
                  Sārdham sthitam mukta-gaṇāvrutam cha, Shrī Swāminārāyaṇamānamāmi. 1{'\n'}
                  {'\n'}
                  Brahmādi-samprārthanayā pruthivyām, Jātam samuktam cha sahāksharam cha;{'\n'}
                  Sarvāvatāre-shvavatāriṇam tvām, Shrī Swāminārāyaṇamānamām. 2{'\n'}
                  {'\n'}
                  Dushprāpyamanyaih kathinairupāyaih, Samādhi-saukhyam hatha-yoga-mukhyaih;{'\n'}
                  Nijāshritebhyo dadatam dayālum, Shrī Swāminārāyaṇamānamāmi. 3{'\n'}
                  {'\n'}
                  Lokottarair bhakta-janāns-charitrai, Rāhlā-dayantam cha bhuvi-bhramantam;{'\n'}
                  Yagnānscha tanvā-namapārasatvam, Shrī Swāminārāyaṇamānamāmi. 4{'\n'}
                  {'\n'}
                  Ekāntikam sthāpayitum dharāyām, Dharmam prakūrvanta-mamūlya-vārtā;{'\n'}
                  Vachah-sudhāscha prakirant-mūrvyām, Shrī Swāminārāyaṇamānamāmi. 5{'\n'}
                  {'\n'}
                  Vishvesha-bhaktim sukarām vidhātum bruhanti, Ramyāni mahitalesmin;{'\n'}
                  Devālayānyāshu vinirmimāṇam, Shrī Swāminārāyaṇamānamāmi. 6{'\n'}
                  {'\n'}
                  Vināshakam sansruti-bandhanānām, Manushya-kalyāṇ-karam mahishtham;{'\n'}
                  Pravartayantam bhuvi sampradāyam, Shrī Swāminārāyaṇamānamāmi. 7{'\n'}
                  {'\n'}
                  Sadaīva Sārangapurasya ramye, Sumandire hyaksharadhāmatulye;{'\n'}
                  Sahāksharam muktayutam vasantam, Shrī Swāminārāyaṇamānamāmi. 8{'\n'}  
                </Text>
              </View>
            )}
          </View>

          {/* Antaryami Section */}
          <View style={styles.requirementSection}>
            <TouchableOpacity
              style={styles.requirementCard}
              onPress={() => toggleSection('antaryami')}
            >
              <Ionicons name="book" size={24} color="#007AFF" style={styles.cardIcon} />
              <Text style={styles.cardText}>Ashtak after Arti (Antaryami Paratparam)</Text>
              <Ionicons 
                name={expandedSections.antaryami ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#007AFF" 
              />
            </TouchableOpacity>
            {expandedSections.antaryami && (
              <View style={styles.contentCard}>
                <Text style={styles.contentText}>
                  Antaryāmi parātparam hita-karam, sarvopari Shri-Hari,{'\n'}
                  Sākāram Parabrahma sarva-sharanam, kartā dayā-sāgaram |{'\n'}
                  Ārādhyam mama ishtadeva prakatam, sarvāvatāri Prabhu,{'\n'}
                  Vandedukha-haram sadā sukha-karam, Shri Swāminārāyanam ||{'\n\n'}
                  
                  Sākshād Aksharadhāma divya paramam, sevāratam murtimān,{'\n'}
                  Sarvādhāra sadā sva-roma vivare, brahmānda-koti-dharam |{'\n'}
                  Bhakti dhyāna kathā sadaiva karanam, brahma-sthiti-dāyakam,{'\n'}
                  Vande Aksharabrahma pāda-kamalam, Gunātitānandanam ||{'\n\n'}
                  
                  Shriman-nirguna-murti sundara tanu, adhyātma-vārtā-ratam,{'\n'}
                  Dehātita dashā akhanda bhajanam, shāntam kshamā-sāgaram |{'\n'}
                  Āgnā-pālana-tatparam guna-grahi, nirdosha-murti swayam,{'\n'}
                  Vande Prāgaji-Bhakta-pāda-kamalam, brahmaswarupam gurum ||{'\n\n'}
                  
                  Shuddhopāsana mandiram surachanam, siddhānta-rakshāparam,{'\n'}
                  Sansthā-sthāpana divya-kārya-karanam, sevā-mayam jivanam |{'\n'}
                  Nishthā nirbhayatā sukashta-sahanam, dhairyam kshamā-dhāranam,{'\n'}
                  Shāstri Yagnapurushadāsa-charanam, vande pratāpi gurum ||{'\n\n'}
                  
                  Vāni amruta-purna harsha-karani, sanjivani mādhuri,{'\n'}
                  Divyam drushthi-pradāna divya hasanam, divyam shubham kirtanam |{'\n'}
                  Brahmānanda prasanna sneha-rasitam, divyam krupā-varshanam,{'\n'}
                  Yogiji guru Jnānajivana pade, bhāve sadā vandanam ||{'\n\n'}
                  
                  Vishve vaidika dharma marma mahimā, satsanga vistārakam,{'\n'}
                  Vātsalyam karunā aho jana-jane, ākarshanam adbhutam |{'\n'}
                  Dāsatvam guru-bhakti nitya bhajanam, samvāditā sādhutā,{'\n'}
                  Nārāyanaswarupa Swāmi Pramukham, vande gurum muktidam ||{'\n\n'}
                  
                  Divyam saumya-mukhāravinda saralam, netre ami-varshanam,{'\n'}
                  Nirdosham mahimā-mayam suhrudayam, shāntam samam nishchalam |{'\n'}
                  Nirmānam mrudu divyabhāva satatam, vāni shubhā nirmalā{'\n'}
                  Vande Keshavajivanam mama gurum, Swāmi Mahantam sadā ||
                </Text>
              </View>
            )}
          </View>

          {/* Thal Section */}
          <View style={styles.requirementSection}>
            <TouchableOpacity
              style={styles.requirementCard}
              onPress={() => toggleSection('thal')}
            >
              <Ionicons name="restaurant" size={24} color="#007AFF" style={styles.cardIcon} />
              <Text style={styles.cardText}>Thal</Text>
              <Ionicons 
                name={expandedSections.thal ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#007AFF" 
              />
            </TouchableOpacity>
            {expandedSections.thal && (
              <View style={styles.contentCard}>
                <Text style={styles.contentText}>
                  Māre gher āvjo Chhogalādhārī; Lādu jalebī ne sev suvādī,{'\n'}
                  Hu to bhāve karī lāvī chhu gharī...{'\n\n'}

                  Sūran pūran ne bhājī kārelā, pāpad vali vaghārī;{'\n'}
                  Vantāk vālodnā shāk karyā, me to cholāfalī chhamkārī... māre 1{'\n\n'}

                  Kāju kamodnā bhāt karyā, me to dāl karī bahu sārī;{'\n'}
                  Limbu kākdīnā lejo athānā, kadhi karī chhe Kāthiyāvādī... māre 2{'\n\n'}

                  Laving sopārī ne pānbīdī vādī, taj elchī jāvantrī sārī;{'\n'}
                  Nishdin āvo to bhāve karī bhedu, em māge Jerām Brahmachārī... māre 3
                </Text>
              </View>
            )}
          </View>

          {/* Puja Shlokas Section */}
          <View style={styles.requirementSection}>
            <TouchableOpacity
              style={styles.requirementCard}
              onPress={() => toggleSection('puja')}
            >
              <Ionicons name="flower" size={24} color="#007AFF" style={styles.cardIcon} />
              <Text style={styles.cardText}>Both Puja Shlokas</Text>
              <Ionicons 
                name={expandedSections.puja ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#007AFF" 
              />
            </TouchableOpacity>
            {expandedSections.puja && (
              <View style={styles.contentCard}>
                <Text style={[styles.sectionSubtitle, styles.blueText]}>Aahvaan Mantra:</Text>
                <Text style={styles.contentText}>
                  Uttishtha Sahajānanda Shri-Hare Purushottama |{'\n'}
                  Gunātitā'kshara Brahman uttishtha krupayā guro ||{'\n'}
                  Āgamyatām hi pujārtham āgamyatām mad-ātmataha |{'\n'}
                  Sānnidhyād darshanād divyāt saubhāgyam vardhate mama ||{'\n'}
                </Text>

                <Text style={[styles.sectionSubtitle, styles.blueText]}>Punaragaman Mantra:</Text>
                <Text style={styles.contentText}>
                  Bhaktyaiva divya-bhāvena pujā te sam-anushthitā |{'\n'}
                  Gachchhā'tha tvam mad-ātmānam Akshara-Purushottama ||
                </Text>
              </View>
            )}
          </View>

          {/* Swami ni Vato Section */}
          <View style={styles.requirementSection}>
            <TouchableOpacity
              style={styles.requirementCard}
              onPress={() => toggleSection('vato')}
            >
              <Ionicons name="chatbox-ellipses" size={24} color="#007AFF" style={styles.cardIcon} />
              <Text style={styles.cardText}>Swami ni Vato</Text>
              <Ionicons 
                name={expandedSections.vato ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#007AFF" 
              />
            </TouchableOpacity>
            {expandedSections.vato && (
              <View style={styles.vatoContainer}>
                <Text style={styles.vatoItem}>1. Apne to Akshardhāmmāj jāvu chhe evo ek sankalp Rākhvo.</Text>
                <Text style={styles.vatoItem}>2. Apne Bhagwānmā chitte pan māyānā nathi em mānvu.</Text>
                <Text style={styles.vatoItem}>3. Ā to Bhagwān jevi sadhu chhe, bhāvi ke vaitage nathi.</Text>
                <Text style={styles.vatoItem}>4. Ā lokni chintya to koi Prabhujī bhajto nathi ne ja ghano thāy to bhāje chhe.</Text>
                <Text style={styles.vatoItem}>5. Ketlākne man namāde chhe ne ketlāk manne ramāde chhe. Ā vāt vicārvā jevi chhe.</Text>
                <Text style={styles.vatoItem}>6. Gāfal tāknāru kāran ej chhe je bhakto rākhe to tāle, ne bijo upāy to koik ekshāso kare tyāre.</Text>
                <Text style={styles.vatoItem}>7. Bhagwān ne Bhagwānnā sādhu o be sāmo joyu ne e jo joyā chhe, bijemā kai mal nathi.</Text>
                <Text style={styles.vatoItem}>8. Vishaynu māge thodhādi thāvu, baheru thāvu, lulu thāvu em thāvu, pan thekāṇe na thāvu.</Text>
                <Text style={styles.vatoItem}>9. Sevā, hit ne premnā pramanmā thāy to karvi, pan sevāk thāvu ja karvi. Te sevāk to shu bijā rājen teve.</Text>
                <Text style={styles.vatoItem}>10. Satya, hit ne priya evu vachne bolvu ne upākhyā nahi bolvu pan āgrathithi vachan kahevu nahi.</Text>
                <Text style={styles.vatoItem}>11. Dhiraj lay tene sadhu tyāj rāji thāy munch hay tene tyāj rāji thāy, em thāy, pan thekāṇe kaherā.</Text>
                <Text style={styles.vatoItem}>12. Karod kām bagādīne pan ekshāso sudhārvo ne kadāpi karod kām sudhāryā ne ek mukshāso bagādyo to tevā shu karyu?</Text>
                <Text style={styles.vatoItem}>13. Mankar mat e dehne je ane prakāre dehātmapan karvu ane thāth, tadko, bhukh, taran tenu sahevā pan karvu nahi.</Text>
                <Text style={styles.vatoItem}>14. Munivat thāti khen karvu? E prashna puchhiyo, teno uttar karyo je, Swāminārāyaṇ, Swāminārāyaṇ, Swāminārāyaṇ em karvu.</Text>
                <Text style={styles.vatoItem}>15. Nirantar sarva kriyāmā pāchhu valine jovu je, māre Bhagwān bhajvā chhe ne hu shu karu chhu? Em jovu.</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  mainHeader: {
    padding: 25,
    paddingTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  mainSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginTop: 5,
  },
  section: {
    margin: 15,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoIcon: {
    marginRight: 15,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: '#4a4a4a',
    lineHeight: 24,
  },
  requirementsList: {
    marginTop: 10,
  },
  requirementSection: {
    marginBottom: 15,
  },
  requirementCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIcon: {
    marginRight: 12,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  scoreCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  scoreItem: {
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  scoreDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
  },
  headerGradient: {
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#007AFF',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headerIcon: {
    marginRight: 12,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  blueText: {
    color: '#0066CC',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  vatoContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: -5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  vatoItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginLeft: 5,
    paddingRight: 15,
  },
}); 