import React, { useEffect } from 'react';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import Header from '../components/common/header';
import DataDisplayBox from '../components/dataDisplayBox';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/loader';
import { UseFetchProps } from '../types';
import dateFormatter from '../utils/dateFormatter';
import ErrorPage from './404';

const LaunchDetails = () => {
  //get id from route
  const { id } = useParams();

  const {callApi, data, error, isLoading}: UseFetchProps = useFetch(`launches/${id}`);
  console.log(error);

  useEffect(() => {
    callApi();
  }, []);
  

  return (
    <Box>
      <Header 
        title="Launch Details"
      />
      {isLoading && (
        <Loader 
          loading={isLoading}
        />
      )}

      {error && (
        <ErrorPage />
      )}

      {data && (
        <Box
          mt="16px"
          mb="16px"
          px="60px"
        >
          <Grid 
            templateColumns='repeat(4, 1fr)'
            mb="10px"
          >
            <GridItem>
              <DataDisplayBox
                data='Name'
                dataDetail={data.name ?? 'N/A'}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Flight Number'
                dataDetail={data.flight_number ?? 'N/A'}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Date'
                dataDetail={data.date_utc ? dateFormatter(data.date_utc) : 'N/A'}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Upcoming'
                dataDetail={data.upcoming}
              />
            </GridItem>
          </Grid>
          <Box
            mb="10px"
          >
            <Heading
              fontSize="20px"
              padding="5px 10px"
              bg="#ccc"
            >
              Fairings
            </Heading>
            <Grid templateColumns='repeat(3, 1fr)'>
              <GridItem>
                <DataDisplayBox
                  data='Reused'
                  dataDetail={data.fairings.reused}
                />
              </GridItem>
              <GridItem>
                <DataDisplayBox
                  data='RecoveryAttempt'
                  dataDetail={data.fairings.recovery_attempt}
                />
              </GridItem>
              <GridItem>
                <DataDisplayBox
                  data='Recoverd'
                  dataDetail={data.fairings.recovered}
                />
              </GridItem>
              <GridItem colSpan={3}>
                <DataDisplayBox
                  data='Ships'
                  dataDetail={data.fairings.ships.length >= 1 ? data.fairings.ships.join() : 'N/A'}
                />
              </GridItem>
            </Grid>

          </Box>
          <Box
            mb="10px"
          >
            <Heading
              fontSize="20px"
              padding="5px 10px"
              bg="#ccc"
            >
              Links
            </Heading>
            <Grid templateColumns='repeat(3, 1fr)'>
              <GridItem>
                <DataDisplayBox
                  data='Patch'
                  dataDetail={data.links.patch.large ?? 'N/A'}
                  type="link"
                />
              </GridItem>
              <GridItem>
                <DataDisplayBox
                  data='Reddit'
                  dataDetail={data.links.reddit.launch ?? 'N/A'}
                  type="link"
                />
              </GridItem>
              <GridItem>
                <DataDisplayBox
                  data='Flickr'
                  dataDetail={
                    data.links.flickr.original.length >= 1 ? 
                    data.links.flickr.original.join() : 
                    'N/A'
                  }
                />
              </GridItem>
              <GridItem>
                <DataDisplayBox
                  data='Presskit'
                  dataDetail={data.links.presskit ?? 'N/A'}
                  type="link"
                />
              </GridItem>
              <GridItem>
                <DataDisplayBox
                  data='Webcast'
                  dataDetail={data.links.webcast ?? 'N/A'}
                  type="link"
                />
              </GridItem>
              <GridItem>
                <DataDisplayBox
                  data='Article'
                  dataDetail={data.links.article ?? 'N/A'}
                  type="link"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <DataDisplayBox
                  data='Wikipedia'
                  dataDetail={data.links.wikipedia ?? 'N/A'}
                  type="link"
                />
              </GridItem>
            </Grid>
          </Box>
          <Grid
            mb="10px"
            templateColumns='repeat(4, 1fr)'
          >
            <GridItem>
              <DataDisplayBox
                data='Static Fire Date'
                dataDetail={data.static_fire_date_utc ? dateFormatter(data.static_fire_date_utc) : 'N/A'}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Net'
                dataDetail={data.net}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Window'
                dataDetail={data.window}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Success'
                dataDetail={data.success}
              />
            </GridItem>
          </Grid>
          {data.failures.length >= 1 && (
            <Box
              mb="10px"
            >
              <Heading
                fontSize="20px"
                padding="5px 10px"
                bg="#ccc"
              >
                Failures
              </Heading>
                {data.failures.map((failure: Record<string, any>, index: number) => (
                  <Grid templateColumns='repeat(3, 1fr)' key={index}>
                    <GridItem>
                      <DataDisplayBox
                        data='Time'
                        dataDetail={failure.time}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Altitude'
                        dataDetail={failure.altitude}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Reason'
                        dataDetail={failure.reason}
                      />
                    </GridItem>
                  </Grid>
                ))}
            </Box>
          )}
          <Grid
            mb="10px"
            templateColumns='repeat(1, 1fr)'
          >
            <GridItem>
              <DataDisplayBox
                data='Details'
                dataDetail={data.details ?? 'N/A'}
              />
            </GridItem>
          </Grid>
          {data.cores.length >= 1 && (
            <Box
              mb="10px"
            >
              <Heading
                fontSize="20px"
                padding="5px 10px"
                bg="#ccc"
              >
                Cores
              </Heading>
                {data.cores.map((core: Record<string, any>, index: number) => (
                  <Grid templateColumns='repeat(4, 1fr)' key={index}>
                    <GridItem>
                      <DataDisplayBox
                        data='Core'
                        dataDetail={core.core}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Flight'
                        dataDetail={core.flight}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Gridfins'
                        dataDetail={core.gridfins}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Legs'
                        dataDetail={core.legs}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Reused'
                        dataDetail={core.reused}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Landing Attempt'
                        dataDetail={core.landing_attempt}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Landing Success'
                        dataDetail={core.landing_success}
                      />
                    </GridItem>
                    <GridItem>
                      <DataDisplayBox
                        data='Landing Type'
                        dataDetail={core.landing_type}
                      />
                    </GridItem>
                    <GridItem colSpan={4}>
                      <DataDisplayBox
                        data='Landpad'
                        dataDetail={core.landpad}
                      />
                    </GridItem>
                  </Grid>
                ))}
            </Box>
          )}
          <Grid 
            mb="10px"
            templateColumns='repeat(4, 1fr)'
          >
            <GridItem>
              <DataDisplayBox
                data='Auto Update'
                dataDetail={data.auto_update}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='TBD'
                dataDetail={data.tbd}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Launch Library Id'
                dataDetail={data.launch_library_id ?? 'N/A'}
              />
            </GridItem>
            <GridItem>
              <DataDisplayBox
                data='Launch Id'
                dataDetail={data.id}
              />
            </GridItem>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default LaunchDetails;