import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';
import i18next from 'i18next'; // Import i18next directly to access resources

// 1. Font Registration (Keep as is)
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 'medium' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-italic-webfont.ttf', fontStyle: 'italic' }
  ]
});

// 2. Styles (Keep as is)
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Roboto', fontSize: 10, lineHeight: 1.5, color: '#333' },
  headerContainer: { marginBottom: 20, borderBottom: '1px solid #ccc', paddingBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#000', textTransform: 'uppercase' },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5, gap: 10, fontSize: 9, color: '#555' },
  link: { color: '#2563eb', textDecoration: 'none' },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#000', borderBottom: '1px solid #eee', marginBottom: 8, paddingBottom: 2, textTransform: 'uppercase' },
  itemContainer: { marginBottom: 10 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  companyName: { fontSize: 11, fontWeight: 'bold' },
  itemDate: { fontSize: 9, fontStyle: 'italic', color: '#666' },
  roleTitle: { fontSize: 10, fontWeight: 'medium', fontStyle: 'italic', marginBottom: 2 },
  bulletContainer: { flexDirection: 'row', marginBottom: 2, paddingLeft: 5 },
  bullet: { width: 10, fontSize: 10 },
  bulletText: { flex: 1, fontSize: 10 },
  techStack: { marginTop: 4, fontSize: 9, color: '#444', fontStyle: 'italic' },
  skillGroup: { marginBottom: 5 },
  skillTitle: { fontWeight: 'bold', fontSize: 10 },
});

const BulletPoint = ({ text }) => (
  <View style={styles.bulletContainer}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

// 3. Main Component
const CVPdfDocument = ({ overview, work, research, t }) => {
    const safeTranslate = (key) => {
        if (!key || typeof key !== 'string') return "";

        // 1. Xử lý từ "Present" (Hiện tại)
        // Vì trong JSON ta để "present" nằm trong "overview", nên gọi key đầy đủ
        if (key === 'present' || key === 'Present') {
            return t("overview.present", { ns: 'overview' }) || "Present";
        }

        // 2. Tự động chọn namespace dựa trên tiền tố của key
        // Ví dụ: key="overview.basicInfo.name" -> ép dùng ns="overview"
        // Cấu trúc JSON: { "overview": { "basicInfo": { "name": "..." } } } -> Khớp hoàn hảo
        if (key.startsWith('overview.')) {
            return t(key, { ns: 'overview' });
        }
        if (key.startsWith('work.')) {
            return t(key, { ns: 'work' });
        }
        if (key.startsWith('research.')) {
            return t(key, { ns: 'research' });
        }

        // 3. Fallback mặc định
        return t(key);
    };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* --- HEADER --- */}
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{safeTranslate(overview?.basicInfo?.name)}</Text> 
          <View style={styles.contactRow}>
            <Text>{safeTranslate(overview?.basicInfo?.location)}</Text>
            <Text>|</Text>
            <Text>{overview?.basicInfo?.email}</Text>
            {overview?.basicInfo?.links?.map((link, index) => (
              <React.Fragment key={index}>
                <Text>|</Text>
                <Link src={link.url} style={styles.link}>{link.text}</Link>
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* --- EDUCATION --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{safeTranslate("overview.edu.title")}</Text>
          {overview?.education?.degrees?.map((edu) => (
            <View key={edu.id} style={styles.itemContainer}>
              <View style={styles.itemHeader}>
                <Text style={styles.companyName}>{safeTranslate(edu.school)}</Text>
                <Text style={styles.itemDate}>
                    {edu.date.replace("{{now}}", safeTranslate("present"))}
                </Text>
              </View>
              <Text style={styles.roleTitle}>{safeTranslate(edu.level)}</Text>
              {edu.details.map((detail, idx) => (
                <BulletPoint key={idx} text={safeTranslate(detail)} />
              ))}
            </View>
          ))}
          <View style={{ marginTop: 5 }}>
             <Text style={{ fontWeight: 'bold', fontSize: 10 }}>{safeTranslate("overview.edu.nature_language")}: </Text>
             <Text>{overview?.education?.languages?.map(lang => safeTranslate(lang)).join(" • ")}</Text>
          </View>
        </View>

        {/* --- SKILLS --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{safeTranslate("overview.skills.title")}</Text>
          {overview?.skills?.map((group, index) => (
            <View key={index} style={styles.skillGroup}>
              <Text style={styles.skillTitle}>{safeTranslate(group.title)}: </Text>
              <Text>{group.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* --- WORK EXPERIENCE --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{safeTranslate("work.title_page")}</Text>
          {work?.map((job) => (
            <View key={job.id} style={styles.itemContainer}>
              <View style={styles.itemHeader}>
                <Text style={styles.companyName}>{safeTranslate(job.company) || job.company}</Text>
                <Text style={styles.itemDate}>
                    {job.date.replace("{{now}}", safeTranslate("present"))}
                </Text>
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 10, marginBottom: 2 }}>
                  {safeTranslate(job.primaryRole)}
              </Text>
              {job.roles?.map((role) => (
                <View key={role.id} style={{ marginBottom: 4 }}>
                  {role.title && <Text style={styles.roleTitle}>{safeTranslate(role.title)}</Text>}
                  {role.points?.map((point, idx) => (
                     <BulletPoint key={idx} text={safeTranslate(point)} />
                  ))}
                </View>
              ))}
              {job.technologies && (
                <Text style={styles.techStack}>Tech: {job.technologies.join(", ")}</Text>
              )}
              {job.techGroups && job.techGroups.map((group, idx) => (
                 <Text key={idx} style={styles.techStack}>
                    {safeTranslate(group.title)}: {group.skills.join(", ")}
                 </Text>
              ))}
            </View>
          ))}
        </View>

        {/* --- RESEARCH --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{safeTranslate("research.title_page")}</Text>
          {research?.map((res) => (
            <View key={res.id} style={styles.itemContainer}>
              <View style={styles.itemHeader}>
                <Text style={styles.companyName}>{safeTranslate(res.title)}</Text>
                <Text style={styles.itemDate}>
                    {res.date.replace("{{now}}", safeTranslate("present"))}
                </Text>
              </View>
              {res.citation && (
                <Text style={{ fontSize: 9, fontStyle: 'italic', marginBottom: 3, color: '#444' }}>
                  Publication: {res.citation}
                </Text>
              )}
              {res.description?.map((desc, idx) => (
                <BulletPoint key={idx} text={safeTranslate(desc).replace(/<[^>]*>?/gm, '')} /> 
              ))}
              {res.techGroups && res.techGroups.map((group, idx) => (
                 <Text key={idx} style={styles.techStack}>
                    {safeTranslate(group.title)}: {group.skills.join(", ")}
                 </Text>
              ))}
            </View>
          ))}
        </View>

      </Page>
    </Document>
  );
};

export default CVPdfDocument;