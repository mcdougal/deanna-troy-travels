import { Box, Container, Typography } from '@mui/material';

import { EmbeddedInstagramPost } from '@components/embed';
import { SectionTitle } from '@components/site';
import { Miscellaneous } from '@lib/miscellaneous';

import { WorkExample } from '../getStaticProps';

import sx from './DoForYouSection.styles';

type Props = {
  miscellaneous: Miscellaneous;
  workExamples: Array<WorkExample>;
};

const DoForYouSection = ({
  miscellaneous,
  workExamples,
}: Props): JSX.Element => {
  return (
    <Container component="section" maxWidth="md">
      <Box sx={sx.sectionTitleContainer}>
        <SectionTitle>
          {miscellaneous.workWithMeDoForYouTitle.text}
        </SectionTitle>
      </Box>
      <Box sx={sx.workExamplesContainer}>
        {workExamples.map((workExample) => {
          return (
            <Box key={workExample.contentId} sx={sx.workExampleContainer}>
              <Typography component="h3" variant="h5">
                {workExample.typeOfWork}
              </Typography>
              {((): JSX.Element | null => {
                if (workExample.contentType === `instagramPost`) {
                  return (
                    <Box sx={sx.instagramPostEmbedContainer}>
                      <EmbeddedInstagramPost
                        includeCaption={false}
                        postId={workExample.contentId}
                      />
                    </Box>
                  );
                }

                const exhaustiveCheck: never = workExample.contentType;
                return exhaustiveCheck;
              })()}
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default DoForYouSection;
