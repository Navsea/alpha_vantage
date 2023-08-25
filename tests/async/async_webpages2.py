import aiohttp
import asyncio

async def fetch_page(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    urls = [
        "http://www.python.org/",
        "http://docs.python.org/3/",
        "http://www.python.org/success-stories/python-for-collaborative-robots/"
    ]
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False)) as session:
       tasks = [asyncio.create_task(fetch_page(session, url)) for url in urls]
       pages = await asyncio.gather(*tasks)

    page1_content, page2_content, page3_content = pages
    print(page1_content, page2_content, page3_content)


if __name__ == "__main__":
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(main())