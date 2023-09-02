from setuptools import setup, find_packages

from src import about

setup(
    name='edda',
    version=about._version,
    description='Evolutionary Database Design Automator',
    author='Joseph Flinn',
    author_email='joseph.s.flinn@gmail.com',
    packages=find_packages(exclude=('tests')),
    install_requires=[
        'Click',
    ],
    entry_points={
        'console_scripts': [
            'edda = src.edda:cli',
        ],
    },
)
