import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type SectionName = 'arti' | 'anantKoti' | 'antaryami' | 'thal' | 'puja' | 'vato';

export default function NotesScreen() {
  const [expandedSections, setExpandedSections] = useState<Record<SectionName, boolean>>({
    arti: false,
    anantKoti: false,
    antaryami: false,
    thal: false,
    puja: false,
    vato: false,
  });
  
  const scrollViewRef = useRef<ScrollView>(null);
  const artiRef = useRef<View>(null);
  const ashtakRef = useRef<View>(null);
  const antaryamiRef = useRef<View>(null);
  const thalRef = useRef<View>(null);
  const pujaRef = useRef<View>(null);
  const vatoRef = useRef<View>(null);

  const scrollToArti = () => {
    artiRef.current?.measureLayout(
      scrollViewRef.current as any,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const scrollToAshtak = () => {
    ashtakRef.current?.measureLayout(
      scrollViewRef.current as any,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const scrollToAntaryami = () => {
    antaryamiRef.current?.measureLayout(
      scrollViewRef.current as any,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const scrollToThal = () => {
    thalRef.current?.measureLayout(
      scrollViewRef.current as any,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const scrollToPuja = () => {
    pujaRef.current?.measureLayout(
      scrollViewRef.current as any,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const scrollToVato = () => {
    vatoRef.current?.measureLayout(
      scrollViewRef.current as any,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const toggleSection = (section: SectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrance Exam Information</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Oral Exam Requirements</Text>
        <Text style={styles.description}>
          Applicants must recite specific mukhpath pieces upon the proctor's prompt.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KST Requirements</Text>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={() => {
            scrollToArti();
            toggleSection('arti');
          }}>
            <Text style={[styles.listItem, styles.linkItem]}>• Arti</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            scrollToAshtak();
            toggleSection('anantKoti');
          }}>
            <Text style={[styles.listItem, styles.linkItem]}>• Ashtak (Anant Koti)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            scrollToAntaryami();
            toggleSection('antaryami');
          }}>
            <Text style={[styles.listItem, styles.linkItem]}>• Ashtak after Arti (Antaryami Paratparam)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            scrollToThal();
            toggleSection('thal');
          }}>
            <Text style={[styles.listItem, styles.linkItem]}>• Thal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            scrollToPuja();
            toggleSection('puja');
          }}>
            <Text style={[styles.listItem, styles.linkItem]}>• Both Puja Shlokas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            scrollToVato();
            toggleSection('vato');
          }}>
            <Text style={[styles.listItem, styles.linkItem]}>• 2 Swami ni Vato</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scoring System</Text>
        <Text style={styles.description}>
          Each item is rated on a scale of 1-5.
        </Text>
        <Text style={styles.importantNote}>
          A minimum score of 90% is required to pass the exam.
        </Text>
      </View>

      <View style={styles.section} ref={artiRef}>
        <TouchableOpacity 
          style={styles.dropdownHeader} 
          onPress={() => toggleSection('arti')}
        >
          <Text style={styles.sectionTitle}>Arti</Text>
          <Ionicons 
            name={expandedSections.arti ? 'chevron-up' : 'chevron-down'} 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
        {expandedSections.arti && (
          <Text style={styles.artiText}>
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
        )}
      </View>

      <View style={styles.section} ref={ashtakRef}>
        <TouchableOpacity 
          style={styles.dropdownHeader} 
          onPress={() => toggleSection('anantKoti')}
        >
          <Text style={styles.sectionTitle}>Ashtak - Anant Koti</Text>
          <Ionicons 
            name={expandedSections.anantKoti ? 'chevron-up' : 'chevron-down'} 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
        {expandedSections.anantKoti && (
          <Text style={styles.artiText}>
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
        )}
      </View>

      <View style={styles.section} ref={antaryamiRef}>
        <TouchableOpacity 
          style={styles.dropdownHeader} 
          onPress={() => toggleSection('antaryami')}
        >
          <Text style={styles.sectionTitle}>Ashtak - Antaryami Paratparam</Text>
          <Ionicons 
            name={expandedSections.antaryami ? 'chevron-up' : 'chevron-down'} 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
        {expandedSections.antaryami && (
          <Text style={styles.artiText}>
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
        )}
      </View>

      <View style={styles.section} ref={thalRef}>
        <TouchableOpacity 
          style={styles.dropdownHeader} 
          onPress={() => toggleSection('thal')}
        >
          <Text style={styles.sectionTitle}>Thal</Text>
          <Ionicons 
            name={expandedSections.thal ? 'chevron-up' : 'chevron-down'} 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
        {expandedSections.thal && (
          <Text style={styles.artiText}>
            Māre gher āvjo Chhogalādhārī; Lādu jalebī ne sev suvādī,{'\n'}
            Hu to bhāve karī lāvī chhu gharī...{'\n\n'}

            Sūran pūran ne bhājī kārelā, pāpad vali vaghārī;{'\n'}
            Vantāk vālodnā shāk karyā, me to cholāfalī chhamkārī... māre 1{'\n\n'}

            Kāju kamodnā bhāt karyā, me to dāl karī bahu sārī;{'\n'}
            Limbu kākdīnā lejo athānā, kadhi karī chhe Kāthiyāvādī... māre 2{'\n\n'}

            Laving sopārī ne pānbīdī vādī, taj elchī jāvantrī sārī;{'\n'}
            Nishdin āvo to bhāve karī bhedu, em māge Jerām Brahmachārī... māre 3
          </Text>
        )}
      </View>

      <View style={styles.section} ref={pujaRef}>
        <TouchableOpacity 
          style={styles.dropdownHeader} 
          onPress={() => toggleSection('puja')}
        >
          <Text style={styles.sectionTitle}>Puja Shlokas</Text>
          <Ionicons 
            name={expandedSections.puja ? 'chevron-up' : 'chevron-down'} 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
        {expandedSections.puja && (
          <>
            <Text style={[styles.sectionSubtitle, styles.blueText]}>Aahvaan Mantra:</Text>
            <Text style={styles.artiText}>
              Uttishtha Sahajānanda Shri-Hare Purushottama |{'\n'}
              Gunātitā'kshara Brahman uttishtha krupayā guro ||{'\n'}
              Āgamyatām hi pujārtham āgamyatām mad-ātmataha |{'\n'}
              Sānnidhyād darshanād divyāt saubhāgyam vardhate mama ||{'\n'}
            </Text>

            <Text style={[styles.sectionSubtitle, styles.blueText]}>Punaragaman Mantra:</Text>
            <Text style={styles.artiText}>
              Bhaktyaiva divya-bhāvena pujā te sam-anushthitā |{'\n'}
              Gachchhā'tha tvam mad-ātmānam Akshara-Purushottama ||
            </Text>
          </>
        )}
      </View>

      <View style={styles.section} ref={vatoRef}>
        <TouchableOpacity 
          style={styles.dropdownHeader} 
          onPress={() => toggleSection('vato')}
        >
          <Text style={styles.sectionTitle}>Swami ni Vato</Text>
          <Ionicons 
            name={expandedSections.vato ? 'chevron-up' : 'chevron-down'} 
            size={24} 
            color="#333" 
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  listContainer: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    lineHeight: 24,
  },
  linkItem: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  importantNote: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
    marginTop: 10,
    lineHeight: 24,
  },
  artiText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
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
    marginTop: 15,
  },
  vatoItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
    paddingVertical: 5,
  },
}); 